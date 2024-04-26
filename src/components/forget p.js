import React, { Component } from 'react';

export default class ForgotPassword extends Component {
  render() {
    return (
      <div className="container">
   

        <h1>نسيت كلمة المرور</h1>
          <br/>
          
        <p className="instruction">الرجاء إدخال عنوان بريدك الإلكتروني أدناه لإعادة تعيين كلمة المرور الخاصة بك</p>
        <form>
          <div className="mb-3">
          <br/>
            <label htmlFor="email">البريد الإلكتروني</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="form-control"
              required
            />
          </div>
          <br/>
              
          <div className="d-grid">

            <button type="submit" className="btn btn-primary" onClick={() => { window.location.href = '#'; }}>
              
              <a href="/VerifyEmail" style={{color: 'white', textDecoration: 'none'}}>إرسال الرمز</a>
            </button>
          </div>
        </form>
        <a href="/sign-in"  >العودة لتسجيل الدخول</a>
    
      </div>
      
    );
  }
}
