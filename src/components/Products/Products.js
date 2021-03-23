
import Wrapper from './Products.styles';
import Button from '@material-ui/core/Button';

const Product = ({ product }) => (
  <Wrapper>
    <div>
      <table>
        <tbody>
          {product.rowId % 2 == 0 ? (
            <tr className='even'>
              <td align='center'>
                <img src={product.img} alt='img not found' />
              </td>
              <td valign='middle' className='textwrap'>
                <h5>{product.item}</h5>
              </td>
              <td valign='middle' align='center'>
                <h5>{product.precio}</h5>
              </td>
            </tr>
          ) : (
            <tr className='odd'>
              <td align='center'>
                <img src={product.img} alt='img not found' />
              </td>
              <td valign='middle' className='textwrap'>
                <h5>{product.item}</h5>
              </td>
              <td valign='middle' align='center'>
                <h5>{product.precio}</h5>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    <Button>Add to Basket</Button>
  </Wrapper>
)

export default Product;
