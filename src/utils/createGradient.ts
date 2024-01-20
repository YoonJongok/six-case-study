type Coordinate = {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
};
type CreateGradientParams = {
  ctx: CanvasRenderingContext2D;
  coordinate: Coordinate;
  fromColor: string;
  toColor: string;
};

export const createGradient = ({
  ctx,
  fromColor,
  toColor,
  coordinate: { x0, x1, y0, y1 },
}: CreateGradientParams) => {
  const gradient = ctx.createLinearGradient(x0, y0, x1, y1);
  gradient.addColorStop(0, fromColor);
  gradient.addColorStop(1, toColor);

  return gradient;
};
