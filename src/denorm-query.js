module.exports = `query ProductTreeView {
    productsAtTx {
      id
      txReq
      key
      name
      description
      retired
    }
    productTrees {
      id
    }
    ...ProductTreeTree_query
  }
  
  fragment ProductTreeTree_query on Query {
    productTrees {
      ...ProductTreeTreeProductTree
    }
    productsAtTx {
      id
      txReq
      key
      name
      description
      retired
    }
  }
  fragment ProductTreeTreeProductTree on ProductTree {
    id
    name
    relations {
      ...ProductTreeTreeRelation
    }
  }
  fragment ProductTreeTreeRelation on ProductTreeRelation {
    id
    parentId
    childId
    sortNo
  }
  `;
