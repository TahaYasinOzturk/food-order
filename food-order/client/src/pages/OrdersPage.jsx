import React from "react";

function OrdersPage() {
  return (
    <div>
      <h2 className="display-2 text-warning">Siparişlerim</h2>
      <hr className="border border-warning" />
      <div className="row border border-3 border-warning shadow-lg p-3 mb-5 bg-body-tertiary rounded bg-light text-warning">
        <div className="col-md-4">
          <p>Siariş Adı</p>
        </div>
        <div className="col-md-4">
          <h4>Adres Bilgileri</h4>
          <p>Sokak: center</p>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default OrdersPage;
