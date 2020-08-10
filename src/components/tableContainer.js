import { connect } from "react-redux";
import ShowTable from "./ShowTable";

const mapStateToProps = (state) => ({
    users: state.users,
})

export default connect(mapStateToProps)(ShowTable);