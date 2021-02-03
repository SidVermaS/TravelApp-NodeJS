import { addMember, deleteMember } from '../controllers/member.js'

const router=express.Router()

router.post('/',addMember)
router.delete('/',deleteMember)

export default router