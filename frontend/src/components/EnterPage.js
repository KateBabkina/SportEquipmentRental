import React from "react";
import logo from "../images/person.png";
  
function EnterPage() {
  return (
    <div>
      <form name="login-form" method="POST">

        <div className="login-panel">

            <div className="login-profile-icon">
                <img src={logo} height="125" width="125" alt="nice"></img>
            </div>

            <div className="login-box">
                <div className="login-title">
                   <b>Введите Логин:</b>
                </div>
                <div className="login-field">
                    <input type="text" id="login" name="login" required minLength="4" maxLength="35" size="20"></input>
                </div>
            </div>

            <div className="password-box">
                <div className="password-title">
                   <b>Введите Пароль:</b>
                </div>
                <div className="password-field">
                    <input type="password" id="password" name="password" required minLength="4" maxLength="35"size="20"></input>
                </div>
            </div>

            <div className="action-box">


                <div className="action-buttons">

                    <div className="button-login">
                        <button className="login-button" type="submit">
                            <div className="login-button-text">
                                Вход
                            </div>
                        </button>
                    </div>

                    <div className="button-register">
                        <button className="register-button" type="submit">
                            <div className="register-button-text">
                                Регистрация
                            </div>
                        </button>
                    </div>

                </div>

            </div>

        </div>
    </form>
    </div>
  );
};
  
export default EnterPage;