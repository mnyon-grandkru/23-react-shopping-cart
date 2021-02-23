COMPONENTS:

ADD_TO_CART
REMOVE_FROM_CART
INSTALLMENTS
T_SHIRTS (id)
T_TITLE
THUMBNAIL
STYLE
CART 
CART_ITEM

Product card
    OBJECT - product
        --free shipping in black box--
        image T_SHIRTS - onClick ADD_TO_CART
        title - T_TITLE
        --yellow line--
        price
        INSTALLMENTS - function divides price by # of installments
        Black button says "Add to cart" with onClick and hover color yellow ADD_TO_CART

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