import ButtonSmall from '@/components/TripLocal/ButtonSmall';
import LocalImage from '@/components/TripLocal/LocalImage';
import LocalName from '@/components/TripLocal/LocalName';

export default function LocalItem({ image, name = '지역명' }) {
  return (
    <li className="flex items-center justify-between bg-white px-5 py-[0.9375rem]">
      <div className="flex items-center gap-5">
        <LocalImage image={image} />
        <LocalName>{name}</LocalName>
      </div>
      <ButtonSmall>선택</ButtonSmall>
    </li>
  );
}