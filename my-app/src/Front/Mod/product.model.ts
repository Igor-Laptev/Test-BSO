import { ProductDto } from '../Dto/product.dto';

export class Product implements ProductDto {
  id: string;
  title: string;
  image: string;
  price: number;

  constructor(id: string, title: string, image: string, price: number) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.price = price;
  }

  public displayPrice(): string {
    return `$${this.price.toFixed(2)}`;
  }
}
