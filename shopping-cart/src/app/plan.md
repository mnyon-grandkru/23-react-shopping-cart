
CARTS FEATURE
Cart - adds to cart, moves from cart (actions)

PRODUCTS FEATURE - get products


COMPONENTS:

1.  PRODUCT CARD COMPONENT = T_SHIRTS - get list of products
    OBJECT - product
        --free shipping in black box--
        image (onClick ADD_TO_CART)
        title
        --yellow line--
        price
        installments
        Black button says "Add to cart" with onClick and hover color yellow

CART 
CART_ITEM

Product card

Sidebar
    Shopping cart 
        CART_COMPONENT
        Thumbnail - THUMBNAIL
        Style - STYLE
        Quantity - increments on clicks
        Buttons that increments quantity & displays price
        Price
        Total price function that adds all prices and 
        displays subtotal.  Changes when new item added
        Sidebar opens onClick of project 
        Sidebar closes clicking x
        Cart icon shows number of items in cart and opens sidebar on click
        "Checkout" button displays alert with total

Products in shopping cart -- array of objects
CART -- Component