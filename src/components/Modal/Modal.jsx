import { cn } from "@/constants/cn";
import { AUTHEN_TYPE } from "@/constants/general";
import React from "react";
import styled from "styled-components";
import Login from "./Login";
import Register from "./Register";
import useModal from "./useModal";
const AuthenModalStyled = styled.div`
  display: ${(props) => (props.isopen ? "block" : "none")};
  padding-left: ${(props) => (props.isopen ? "15px" : "0px")};
`;
const Modal = () => {
  const { onChangeTab, onClose, isOpen, activeTab, onLogin, onRegister } =
    useModal();
  if (!isOpen) return <></>;
  return (
    <>
      <AuthenModalStyled
        className={cn("modal", { "fade show": isOpen })}
        id="signin-modal"
        role="dialog"
        isopen={isOpen.toString()}
        onClick={onClose}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-body">
              <button type="button" className="close" onClick={onClose}>
                <span aria-hidden="true">
                  <i className="icon-close" />
                </span>
              </button>
              <div className="form-box">
                <div className="form-tab">
                  <ul
                    className="nav nav-pills nav-fill nav-border-anim"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className={cn("nav-link", {
                          active: activeTab === AUTHEN_TYPE.login,
                        })}
                        id="signin-tab"
                        role="tab"
                        onClick={() => onChangeTab(AUTHEN_TYPE.login)}
                      >
                        Sign In
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={cn("nav-link", {
                          active: activeTab === AUTHEN_TYPE.register,
                        })}
                        id="register-tab"
                        role="tab"
                        onClick={() => onChangeTab(AUTHEN_TYPE.register)}
                      >
                        Register
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="tab-content-5">
                    <Login activeTab={activeTab} onLogin={onLogin} />
                    <Register activeTab={activeTab} onRegister={onRegister} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuthenModalStyled>
      <div onClick={onClose} className="modal-backdrop fade show"></div>
    </>
  );
};

export default Modal;
