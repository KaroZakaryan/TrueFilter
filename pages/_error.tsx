import * as Sentry from '@sentry/nextjs';
import type {NextPage} from 'next';
import NextErrorComponent from 'next/error';

type ErrorPageProps = {
  err: unknown;
  statusCode: number;
  hasGetInitialPropsRun: boolean;
};

const ErrorPage: NextPage<ErrorPageProps> = ({statusCode, hasGetInitialPropsRun, err}) => {
  if (!hasGetInitialPropsRun && err) {
    Sentry.captureException(err);
  }

  return <NextErrorComponent statusCode={statusCode} />;
};

ErrorPage.getInitialProps = async (context): Promise<ErrorPageProps> => {
  const errorInitialProps = await NextErrorComponent.getInitialProps(context);

  const {res, err, asPath} = context;

  const nextErrorInitialProps: ErrorPageProps = {
    err,
    hasGetInitialPropsRun: false,
    statusCode: errorInitialProps.statusCode,
  };

  nextErrorInitialProps.hasGetInitialPropsRun = true;

  if (res?.statusCode === 404) {
    return nextErrorInitialProps;
  }

  if (err) {
    Sentry.captureException(err);

    await Sentry.flush(2000);

    return nextErrorInitialProps;
  }

  Sentry.captureException(
    new Error(`_error.js getInitialProps missing data at path: ${asPath || ''}`),
  );

  await Sentry.flush(2000);

  return nextErrorInitialProps;
};

export default ErrorPage;
