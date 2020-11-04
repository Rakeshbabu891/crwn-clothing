import React from "react";
import "./collection-overview.component.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import { CollectionPreview } from "../../components/collection-preview/collection-peview.component";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherObjects }) => (
      <div key={id}>
        <CollectionPreview {...otherObjects} />
      </div>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
