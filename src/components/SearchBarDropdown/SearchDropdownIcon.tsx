import SearchIcon from '@/components/Svg/SearchIcon';

type SearchDropdownIconProps = {
  color?: string;
  width?: number;
  height?: number;
};

const SearchDropdownIcon: React.FC<SearchDropdownIconProps>  = ({ color = "currentColor", width = 24, height = 24 }) => {
  return (
    <span className="w-8 flex-grow-0">
    <SearchIcon color={color} />
  </span>
  )
}

export default SearchDropdownIcon