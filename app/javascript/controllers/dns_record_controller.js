import { Controller } from "@hotwired/stimulus";

/*StreamActions.insertId = function() {
  const id = this.getAttribute("id");
  if(!id) {
    throw new Error("insertId stream action invoked without an id");
  }

  // DNSimple sorts records by their ID
  // TODO: insert the element in the right place
};*/


export default class extends Controller {
  static values = { editing: { type: Boolean, default: false } };

  edit() {
    this.editing = true; 
  }
  cancel() {
    this.editing = false;
    // reset form fields
  }
  delete() {    
    confirm("Are you sure you want to delete the record?");
  }

  editingValueChanged() {
    
  }
}
