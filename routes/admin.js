import { addAdmin, deleteAdmin } from '../controllers/admin.js'

const router=express.Router()

router.post('/',addAdmin)
router.delete('/',deleteAdmin)

export default router