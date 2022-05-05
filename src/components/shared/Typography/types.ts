type Align = 'right' | 'left' | 'center' | 'justify';

type Variant = 'text' | 'heading' | 'button' | 'label' | 'link';

type TypoType = 'small' | 'large' | 'extra' | 'medium' | 'semibold' | 'regular';

export type TypographyProps = Partial<{
  align: Align;
  type: TypoType;
  variant: Variant;
  children: string;
  className: string;
  capitalize: boolean;
  isQuestion: boolean;
  tagName: keyof JSX.IntrinsicElements;
}>;
