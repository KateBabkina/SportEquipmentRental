import React from "react";

import classes from '../css/main_page.module.css';
  
function Home() {
    return (
      <div className={classes.basePart}>

        <div className={classes.centreColumn}>

            <div className={classes.description}>

              Спортивная база “SportBox” — это огромный выбор спортивного оборудования и мероприятий для активного
              отдыха детей, взрослых, новичков и профессионалов в спорте. Измените свою жизнь к лучшему с нами!
              
            </div>
            
        </div>

      </div>
    );
};
  
export default Home;