import React from 'react';


class Modify extends React.Component {
  constructor() {
    super()
    this.editActivity = this.editActivity.bind(this);
  }
  editActivity (){
    const allForms = Array.from(document.querySelectorAll('.editForm'));
    const index = (this.props.index.slice(3)) - 1;
    const correctForm = allForms[index];
    correctForm.classList.toggle('showForm');
  }

  render() {
    const {name, moreorless, minqty, unit} = this.props.details
    return (
      <div>
        <h6><a onClick={this.editActivity}>Edit</a></h6>
        <form action="" className="editForm">
          <p>I would like to {name.toLowerCase()}
          <input type="radio" name="moreorless" className="moreorless" label="more" value="1"/> more
          <input type="radio" name="moreorless" className="moreorless" label="less" value="-1"/> less.
          </p>

          <p>When I {name.toLowerCase()}, the minimum I would {name.toLowerCase()} is
          <input type="text" className="minqty" placeholder="1, 2, 3..."/>
          <input type="text" className="unit" placeholder="miles, minutes, drinks..."/>.
          </p>
          <p>How important is it to me that I {name.toLowerCase()} {moreorless}?
          <input type="text" className="weight" placeholder="1-10"/>
          </p>
        </form>
      </div>
    )
  }
}

export default Modify;
