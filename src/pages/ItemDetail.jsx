import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/containers/ItemDetailContainer/ItemDetailContainer.component';

function ItemDetail() {
  const { id } = useParams();

  return <ItemDetailContainer productId={id} />;
}

export default ItemDetail;
