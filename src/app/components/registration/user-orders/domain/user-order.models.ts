import { 
	UserOrder,
// } from 'app/database-models';
} from 'src/app/database-models';

export class UserOrderLookupGroup {
	userOrder : UserOrder;
    userCardDetail: import("src/app/database-models/user-card-detail").UserCardDetail;
}
