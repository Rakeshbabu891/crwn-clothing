import React from "react";
import SHOP_DATA from "./shop.data";
import { CollectionPreview } from "../../components/collection-preview/collection-peview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    return (
      <div>
        {this.state.collections.map(({ id, ...otherObjects }) => (
          <div key={id}>
            <CollectionPreview {...otherObjects} />
          </div>
        ))}
      </div>
    );
  }
}

export default ShopPage;
