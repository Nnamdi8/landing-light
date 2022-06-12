import React from "react";
import './card.css';
import Visa from "../visa/visa";


const Card = () => {
  return (
    <div className="master">
      <div className="masterCard">
       <Visa/>
      </div>
        <div className="cardDetail">
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label for="cc-number" className="control-label">
                  Credit card number
                </label>
                <input
                  type="tel"
                  id="cc-number"
                  class="input-lg
                                        form-control cc-number"
                  autocomplete="cc-number"
                  placeholder="4324 5334 9382 1030 "
                  name=""
                />
              </div> <br/>
            </div>
            <div className="col-sm-6">
              <div className="form group">
                <label for="cc-number" class="control-label">
                  Expiration date
                </label>
                <input
                  type="tel"
                  id="cc-number"
                  className="input-lg
                                                form-control cc-number"
                  autocomplete="cc-number"
                  placeholder="03  / 24"
                  name=""
                />
              </div>
            </div>
          </div><br/>
          <div className="row">
            <div class="col-sm-6">
              <div className="form group">
                <label for="cc-code" class="control-label">
                  Security code
                </label>
                <input
                  type="tel"
                  id="cc-code"
                  class="input-lg
                  form-control cc-code"
                  autocomplete="off"
                  placeholder="420"
                  name=""
                />
              </div><br/>
            </div>
            <div className="col-sm-6">
              <div className="form group">
                <label for="cc-cvc" class="control-label">
                  Postal Code
                </label>
                <input
                  type="tel"
                  id="cc-cvc"
                  class="input-lg
                  form-control cc-cvc"
                  autocomplete="off"
                  placeholder="10119"
                  name=""
                />
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="radio" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Use this for your next purchase
              </label>
            </div>
          </div><br/>

          <div className="form-group">
            <input
              type="button"
              value="Add card"
              class="btn btn-primary btn-md form-control"
            />
          </div>
        </div>
      
    </div>
  );
};

export default Card;
