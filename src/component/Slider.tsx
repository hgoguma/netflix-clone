import { TmdbItem } from 'src/interfaces';

interface Props {
  item: TmdbItem
}

const Slider = ({ item }: Props) => {
  return (
    <div className="slider__item">
      <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.title} />
    </div>
  );
};

export default Slider;