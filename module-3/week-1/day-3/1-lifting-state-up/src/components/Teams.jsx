import React, { Component } from "react";
import MemberCard from "./MemberCard";
import FilterComponent from "./FilterComponent";
import Search from "./Search";

const allMembers = [
  { name: "Manon", team: "racoon" },
  { name: "Chakib", team: "honey-badger" },
  { name: "Spyros", team: "racoon" },
  { name: "Charlotte", team: "racoon" },
  { name: "Mary", team: "honey-badger" },
  { name: "Audrey", team: "racoon" },
  { name: "Malamine", team: "honey-badger" },
  { name: "Aude", team: "racoon" },
  { name: "Axel", team: "honey-badger" },
  { name: "Alice", team: "racoon" },
  { name: "Fanny", team: "honey-badger" },
  { name: "Setti", team: "racoon" },
];

class Teams extends Component {
  state = {
    members: allMembers,
    selectedMembers: null,
    searchValue: "",
  };

  setTeam = (event, index) => {
    // const index = this.state.members.findIndex(member => {
    //   return member.id === id
    // })

    const copy = [...this.state.members];
    copy[index].team = event.target.value;
    this.setState({ members: copy });
  };

  handleFilter = (teamType) => {
    // console.log(teamType)
    // console.log("Event fired from child component");
    this.setState({ selectedMembers: teamType });
  };

  handleSearch = (event) => {
    console.log("I am being triggered");

    this.setState({ searchValue: event.target.value });
  };

  render() {
    const filteredMembers = this.state.members
      .filter((member) => {
        if (this.state.selectedMembers === null) return true;
        return member.team === this.state.selectedMembers;
      })
      .filter((member) => {
        return member.name.includes(this.state.searchValue);
      });

    return (
      <React.Fragment>
        <Search callback={this.handleSearch} />

        <FilterComponent callback={this.handleFilter} />

        <div className="Teams">
          {filteredMembers.map((member, index) => (
            <MemberCard
              key={index}
              index={index}
              member={member}
              callback={this.setTeam}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Teams;
