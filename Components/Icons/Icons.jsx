
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesomeUser from '@expo/vector-icons/FontAwesome';
import FontAwesomeUserFill from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export const CircleInfoIcon = (props) => <FontAwesome6 name="circle-info" size={24} color="white" {...props} />

export const HomeIcon = (props) => <FontAwesome name="home" size={24} color="white" {...props} />

export const InfoIcon = (props) => <FontAwesome name="info" size={32} color="white" {...props} />

export const QrIcon = (props) => <MaterialIcons name="qr-code-2" size={30} color="black" {...props}  />

export const EmptyHomeIcon = (props) => <Feather name="home" size={24} color="black" {...props}  />

export const EmptyUserIcon = (props) => <FontAwesomeUser name="user" size={24} color="black" {...props} />

export const EmptyUserFillIcon = (props) => <FontAwesomeUserFill name="user-o" size={24} color="black"  {...props}/>

export const HelpUserIcon = (props) => <Ionicons name="help-sharp" size={24} color="black" />

export const ShopUserIcon = (props) => <Ionicons name="list-outline" size={24} color="black" {...props}/>

export const ArrowRight = (props) => <SimpleLineIcons name="arrow-right" size={10} color="black"  {...props}/>

export const LogoutIcon = (props) => <MaterialIcons name="logout" size={18} color="black" {...props} />

export const SearchIcon = (props) => <EvilIcons name="search" size={24} color="black" {...props} />

export const SaveIcon = (props) => <AntDesign name="save" size={20} color="black" {...props}/>

