module.exports = `query ProductTreeView {
    productTrees {
      id
    }
    ...ProductTreeTree_query
  }
  
  fragment ProductTreeTree_query on Query {
    productTrees {
      ...ProductTreeTreeProductTree
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
