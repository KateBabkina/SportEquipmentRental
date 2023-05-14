import React from "react";

function Footer(props) {
    return (
    <footer className="footer">
        <div className="contacts">
            <p>
                Контактная информация:
                <br />
                <br />
                394018, Россия, г. Воронеж, Университетская площадь, 1<br />
                +7 (495) 900-56-56<br />
                bkatya5577@gmail.com<br />
                ignat_kandaurov@mail.ru<br />
                kornilov.ilja@rambler.ru

            </p>
        </div>

        <div className="developers">
            <p>
                Разработчики:
                <br />
                <br />
                И.Р. Корнилов,
                <br /> 
                Е.А. Бабкина,
                <br /> 
                И.А. Кандауров
            </p>
        </div>
    </footer>)
}

export default Footer