import React, { Component } from "react";
import shams from "../../content/images/shams.png";

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={shams} alt="دكتور شمس" />
            </div>
            <div>
              <h3 style={{ marginBottom: "1.2rem" }}>دكتور شمس</h3>
              <div>
                <ul>
                  <li> كلية الطب جامعة الاسكندرية </li>
                  <p>
                    الطب والتطبيب ليس مهنة بل رسالة إنسانية تسمو فيها القيم
                    والمبادئ ويبذل فيها الطبيب كل ما يملك من علم ومعرفة وخبرة بل
                    ويضحى بماله وراحته وحتى علاقاته الإجتماعية والأسرية من أجل
                    تلك الرسالة لتطبيب ذلك المريض أياً كان ، فالمرضى كلهم سواسية
                    أمام الطبيب غنيهم وفقيرهم وزيرهم وخفيرهم بما في ذلك العدو في
                    لحظة مرضه لا يفكر الطبيب إلا في إعطاء الوصفة المناسبة للمرض
                    ولذلك المريض .
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}
