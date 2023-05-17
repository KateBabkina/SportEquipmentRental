import React from "react";

import '../css/main_page.css'

function Footer(props) {
    return (
        <footer className="footer">
            <div className="contacts">
                <p>
                    КОНТАКТНАЯ ИНФОРМАЦИЯ:
                    <br />
                    <br />
                    394018, Россия, г. Воронеж,
                    <br />
                    Университетская площадь, 1
                    <br />
                    +7 (495) 900-56-56
                    <br />
                    bkatya5577@gmail.com
                    <br />
                    ignat_kandaurov@mail.ru
                    <br />
                    kornilov.ilja@rambler.ru

                </p>
            </div>

            <div className="developers">
                <p>
                    РАЗРАБОТЧИКИ:
                    <br />
                    <br />
                    И.Р. Корнилов,
                    <br />
                    <br />
                    Е.А. Бабкина,
                    <br />
                    <br />
                    И.А. Кандауров
                </p>
            </div>
        </footer>)
}

export default Footer