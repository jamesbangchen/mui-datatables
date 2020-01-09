import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "../../src/";

class Example extends React.Component {

  constructor(props) {
    super(props);

    this.state = { counter: 1 };
  }

  // We update an arbitrary value here to test table resizing on state updates
  update = () => {
    let { counter } = this.state;
    counter += 1;

    this.setState({ counter });
  };

  render() {
    const { counter } = this.state;

    const columns = ["Load ID", "Status", "Vessel", "SO", "Type", "Container Utilization", "Container ID", "Dock",
      "Staging", "Pick Requests", "Expected Cartons", "Loaded Cartons", "Actions", "Destination", "Reference Id",
      "LSP SI CutOff"];

    const data = [
      ["ld_test1", "Created 2019-07-01 ", "Vessel_Id_test1","SO_test1","type_test1", "test1", "containerId_test1", "dock_test1", "staging_test1", "pr_test1", "test1", "test1", "action_test1", "destination_test1", "referenceId_test1","2019-07-10"],
      ["ld_test1", "Created 2019-07-01 ", "Vessel_Id_test1","SO_test1","type_test1", "test1", "containerId_test1", "dock_test1", "staging_test1", "pr_test1", "test1", "test1", "action_test1", "destination_test1", "referenceId_test1","2019-07-10"],
      ["ld_test2", "Created 2019-07-01 ", "Vessel_Id_test2","SO_test2","type_test2", "test2", "containerId_test2", "dock_test2", "staging_test2", "pr_test2", "test2", "test2", "action_test2", "destination_test2", "referenceId_test2","2019-07-10"],
      ["ld_test2", "Created 2019-07-01 ", "Vessel_Id_test2","SO_test2","type_test2", "test2", "containerId_test2", "dock_test2", "staging_test2", "pr_test2", "test2", "test2", "action_test2", "destination_test2", "referenceId_test2","2019-07-10"],
      ["ld_test3", "Created 2019-07-01 ", "Vessel_Id_test3","SO_test3","type_test3", "test3", "containerId_test3", "dock_test3", "staging_test3", "pr_test3", "test3", "test3", "action_test3", "destination_test3", "referenceId_test3","2019-07-10"],
      ["ld_test3", "Created 2019-07-01 ", "Vessel_Id_test3","SO_test3","type_test3", "test3", "containerId_test3", "dock_test3", "staging_test3", "pr_test3", "test3", "test3", "action_test3", "destination_test3", "referenceId_test3","2019-07-10"],
      ["ld_test2", "Created 2019-07-01 ", "Vessel_Id_test2","SO_test2","type_test2", "test2", "containerId_test2", "dock_test2", "staging_test2", "pr_test2", "test2", "test2", "action_test2", "destination_test2", "referenceId_test2","2019-07-10"],
      ["ld_test2", "Created 2019-07-01 ", "Vessel_Id_test2","SO_test2","type_test2", "test2", "containerId_test2", "dock_test2", "staging_test2", "pr_test2", "test2", "test2", "action_test2", "destination_test2", "referenceId_test2","2019-07-10"],
      ["ld_test2", "Created 2019-07-01 ", "Vessel_Id_test2","SO_test2","type_test2", "test2", "containerId_test2", "dock_test2", "staging_test2", "pr_test2", "test2", "test2", "action_test2", "destination_test2", "referenceId_test2","2019-07-10"],
      ["ld_test1", "Created 2019-07-01 ", "Vessel_Id_test1","SO_test1","type_test1", "test1", "containerId_test1", "dock_test1", "staging_test1", "pr_test1", "test1", "test1", "action_test1", "destination_test1", "referenceId_test1","2019-07-10"],
      ["ld_test5", "Created 2019-07-01 ", "Vessel_Id_test5","SO_test5","type_test5", "test5", "containerId_test5", "dock_test5", "staging_test5", "pr_test5", "test5", "test5", "action_test5", "destination_test5", "referenceId_test5","2019-07-10"],
      ["ld_test5", "Created 2019-07-01 ", "Vessel_Id_test5","SO_test5","type_test5", "test5", "containerId_test5", "dock_test5", "staging_test5", "pr_test5", "test5", "test5", "action_test5", "destination_test5", "referenceId_test5","2019-07-10"],
      ["ld_test5", "Created 2019-07-01 ", "Vessel_Id_test5","SO_test5","type_test5", "test5", "containerId_test5", "dock_test5", "staging_test5", "pr_test5", "test5", "test5", "action_test5", "destination_test5", "referenceId_test5","2019-07-10"],
      ["ld_test1", "Created 2019-07-01 ", "Vessel_Id_test1","SO_test1","type_test1", "test1", "containerId_test1", "dock_test1", "staging_test1", "pr_test1", "test1", "test1", "action_test1", "destination_test1", "referenceId_test1","2019-07-10"],
      ["ld_test6", "Created 2019-07-01 ", "Vessel_Id_test6","SO_test6","type_test6", "test6", "containerId_test6", "dock_test6", "staging_test6", "pr_test6", "test6", "test6", "action_test6", "destination_test6", "referenceId_test6","2019-07-10"],
      ["ld_test6", "Created 2019-07-01 ", "Vessel_Id_test6","SO_test6","type_test6", "test6", "containerId_test6", "dock_test6", "staging_test6", "pr_test6", "test6", "test6", "action_test6", "destination_test6", "referenceId_test6","2019-07-10"],
      ["ld_test1", "Created 2019-07-01 ", "Vessel_Id_test1","SO_test1","type_test1", "test1", "containerId_test1", "dock_test1", "staging_test1", "pr_test1", "test1", "test1", "action_test1", "destination_test1", "referenceId_test1","2019-07-10"]
    ];


    const options = {
      filter: false,
      filterType: 'dropdown',
      resizableColumns: true,
      print: false,

    };

    return (
      <MUIDataTable title={"Glenn Load Management"} data={data} columns={columns} options={options} />
    );

  }
}

export default Example;
