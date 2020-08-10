
import { connect } from "react-redux";
import AddUser from "./AddUser"
import {addUser, updateField} from "../redux/actions"

const mapStateToProps = (state) => ({
  user: state.user,
})
const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUser(user)),
  updateField: (fieldType, value) => dispatch(updateField(fieldType, value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
