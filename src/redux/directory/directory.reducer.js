const INITIAL_STATE = {
  sections: [
    {
      title: "hatter",
      imageUrl: "https://react-c776ed.netlify.com/images/hats.jpg",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "jakker",
      imageUrl: "https://react-c776ed.netlify.com/images/jacket.jpg",
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "sko",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers"
    },
    {
      title: "dame",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "menn",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "shop/mens"
    }
  ]
};

const DirectoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default DirectoryReducer;
