import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Map";

const user = new User();
const company = new Company();
const custonMap = new Map("map");

custonMap.addMarker(company);
custonMap.addMarker(user);
