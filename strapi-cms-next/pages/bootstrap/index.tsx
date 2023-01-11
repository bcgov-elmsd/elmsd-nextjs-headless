import React from "react";

const index = () => {
  return (
    <div>
      <main className="container">
        <div className="row">
          <div className="col-lg-7">
            <p>
              <button type="button" className="btn btn-primary">
                Primary
              </button>
              <button type="button" className="btn btn-secondary">
                Secondary
              </button>
              <button type="button" className="btn btn-success">
                Success
              </button>
              <button type="button" className="btn btn-info">
                Info
              </button>
              <button type="button" className="btn btn-warning">
                Warning
              </button>
              <button type="button" className="btn btn-danger">
                Danger
              </button>
              <button type="button" className="btn btn-link">
                Link
              </button>
            </p>

            <p>
              <button type="button" className="btn btn-primary disabled">
                Primary
              </button>
              <button type="button" className="btn btn-secondary disabled">
                Secondary
              </button>
              <button type="button" className="btn btn-success disabled">
                Success
              </button>
              <button type="button" className="btn btn-info disabled">
                Info
              </button>
              <button type="button" className="btn btn-warning disabled">
                Warning
              </button>
              <button type="button" className="btn btn-danger disabled">
                Danger
              </button>
              <button type="button" className="btn btn-link disabled">
                Link
              </button>
            </p>

            <p>
              <button type="button" className="btn btn-outline-primary">
                Primary
              </button>
              <button type="button" className="btn btn-outline-secondary">
                Secondary
              </button>
              <button type="button" className="btn btn-outline-success">
                Success
              </button>
              <button type="button" className="btn btn-outline-info">
                Info
              </button>
              <button type="button" className="btn btn-outline-warning">
                Warning
              </button>
              <button type="button" className="btn btn-outline-danger">
                Danger
              </button>
            </p>

            <div>
              <div
                className="btn-group"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <button type="button" className="btn btn-primary">
                  Primary
                </button>
                <div className="btn-group" role="group">
                  <button
                    id="btnGroupDrop1"
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="btnGroupDrop1"
                  >
                    <a className="dropdown-item" href="#">
                      Dropdown link
                    </a>
                    <a className="dropdown-item" href="#">
                      Dropdown link
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="btn-group"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <button type="button" className="btn btn-success">
                  Success
                </button>
                <div className="btn-group" role="group">
                  <button
                    id="btnGroupDrop2"
                    type="button"
                    className="btn btn-success dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="btnGroupDrop2"
                  >
                    <a className="dropdown-item" href="#">
                      Dropdown link
                    </a>
                    <a className="dropdown-item" href="#">
                      Dropdown link
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="btn-group"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <button type="button" className="btn btn-info">
                  Info
                </button>
                <div className="btn-group" role="group">
                  <button
                    id="btnGroupDrop3"
                    type="button"
                    className="btn btn-info dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="btnGroupDrop3"
                  >
                    <a className="dropdown-item" href="#">
                      Dropdown link
                    </a>
                    <a className="dropdown-item" href="#">
                      Dropdown link
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="btn-group"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <button type="button" className="btn btn-danger">
                  Danger
                </button>
                <div className="btn-group" role="group">
                  <button
                    id="btnGroupDrop4"
                    type="button"
                    className="btn btn-danger dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="btnGroupDrop4"
                  >
                    <a className="dropdown-item" href="#">
                      Dropdown link
                    </a>
                    <a className="dropdown-item" href="#">
                      Dropdown link
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <button type="button" className="btn btn-primary btn-lg">
                Large button
              </button>
              <button type="button" className="btn btn-primary">
                Default button
              </button>
              <button type="button" className="btn btn-primary btn-sm">
                Small button
              </button>
            </div>
          </div>
          <div className="col-lg-5">
            <p>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
              >
                Block level button
              </button>
            </p>

            <div className="mb-3">
              <div className="btn-group" data-toggle="buttons">
                <label className="btn btn-primary active">
                  <input type="checkbox" checked={false} /> Checkbox 1
                </label>
                <label className="btn btn-primary">
                  <input type="checkbox" /> Checkbox 2
                </label>
                <label className="btn btn-primary">
                  <input type="checkbox" /> Checkbox 3
                </label>
              </div>
            </div>

            <div className="mb-3">
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-primary active">
                  <input
                    type="radio"
                    name="options"
                    id="option1"
                    checked={false}
                  />{" "}
                  Radio 1
                </label>
                <label className="btn btn-primary">
                  <input type="radio" name="options" id="option2" /> Radio 2
                </label>
                <label className="btn btn-primary">
                  <input type="radio" name="options" id="option3/" /> Radio 3
                </label>
              </div>
            </div>

            <div className="mb-3">
              <div className="btn-group-vertical" data-toggle="buttons">
                <button type="button" className="btn btn-primary">
                  Button
                </button>
                <button type="button" className="btn btn-primary">
                  Button
                </button>
                <button type="button" className="btn btn-primary">
                  Button
                </button>
                <button type="button" className="btn btn-primary">
                  Button
                </button>
                <button type="button" className="btn btn-primary">
                  Button
                </button>
                <button type="button" className="btn btn-primary">
                  Button
                </button>
              </div>
            </div>

            <div className="mb-3">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" className="btn btn-bcgold">
                  Left
                </button>
                <button type="button" className="btn btn-bcgold">
                  Middle
                </button>
                <button type="button" className="btn btn-bcgold">
                  Right
                </button>
              </div>
            </div>

            <div className="mb-3">
              <div
                className="btn-toolbar"
                role="toolbar"
                aria-label="Toolbar with button groups"
              >
                <div
                  className="btn-group mr-2"
                  role="group"
                  aria-label="First group"
                >
                  <button type="button" className="btn btn-secondary">
                    1
                  </button>
                  <button type="button" className="btn btn-secondary">
                    2
                  </button>
                  <button type="button" className="btn btn-secondary">
                    3
                  </button>
                  <button type="button" className="btn btn-secondary">
                    4
                  </button>
                </div>
                <div
                  className="btn-group mr-2"
                  role="group"
                  aria-label="Second group"
                >
                  <button type="button" className="btn btn-secondary">
                    5
                  </button>
                  <button type="button" className="btn btn-secondary">
                    6
                  </button>
                  <button type="button" className="btn btn-secondary">
                    7
                  </button>
                </div>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Third group"
                >
                  <button type="button" className="btn btn-secondary">
                    8
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <h2>Modals</h2>

            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Launch demo modal
            </button>
            <div>
              <div
                id="exampleModal"
                className="modal fade"
                style={{ display: "None" }}
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Modal title</h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default index;
