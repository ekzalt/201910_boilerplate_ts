export class ArgumentError extends TypeError {
  public readonly name: string;

  constructor(msg: string) {
    super(msg);

    this.name = "ArgumentError";
  }
}
