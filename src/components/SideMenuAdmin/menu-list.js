import LocalMallIcon from '@mui/icons-material/LocalMall'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import paths from '../../constants/paths'
const listLink = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: LocalMallIcon
  },
  {
    id: 2,
    label: 'Listar-Produtos',
    link: paths.Products,
    icon: ShoppingCartIcon
  }
]

export default listLink
