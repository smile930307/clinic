import React, { Component } from "react";
import shams from "../../content/images/shams.png";

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={shams} alt="محمد شمس" />
            </div>
            <div>
              <h3 style={{ marginBottom: "1.2rem" }}>محمد شمس</h3>
              <p>
                بدأت الإحتراف في مجال برمجيات الويب منذ عام 2017، مهتم بكل مايخص
                مجال مراجعة الموبايلات واخر اخبار التطبيقات لافادة المسهلك
                العربى واعلامه بكافة الاخبار التى تخص مجال الهواتف الذكية
              </p>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}
