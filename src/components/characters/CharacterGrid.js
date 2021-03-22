import Spinner from "../UI/Spinner";
import CharacterItem from "./CharacterItem";

const CharacterGrd = ({items, isLoading}) => {
    return isLoading ? 
        <Spinner /> : 
        <section className='cards'>
            {
                items.map(item => (
                    <CharacterItem key={item.char_id} item={item} />
                ))
            }
        </section>;
}
 
export default CharacterGrd;