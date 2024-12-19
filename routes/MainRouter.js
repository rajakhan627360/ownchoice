const MainRouter = require("express").Router()

const MaincategoryMainRouter = require("./MaincategoryRoutes")
const SubcategoryMainRouter = require("./SubcategoryRoutes")
const BrandMainRouter = require("./BrandRoutes")
const TestimonialMainRouter = require("./TestimonialRoutes")
const ProductMainRouter = require("./ProductRoutes")
const UserMainRouter = require("./UserRoutes")
const CartMainRouter = require("./CartRoutes")
const WishlistMainRouter = require("./WishlistRoutes")
const CheckoutMainRouter = require("./CheckoutRoutes")
const NewsletterMainRouter = require("./NewsletterRoutes")
const ContactUsMainRouter = require("./ContactUsRoutes")

MainRouter.use("/maincategory",MaincategoryMainRouter)
MainRouter.use("/subcategory",SubcategoryMainRouter)
MainRouter.use("/brand",BrandMainRouter)
MainRouter.use("/testimonial",TestimonialMainRouter)
MainRouter.use("/product",ProductMainRouter)
MainRouter.use("/user",UserMainRouter)
MainRouter.use("/cart",CartMainRouter)
MainRouter.use("/wishlist",WishlistMainRouter)
MainRouter.use("/checkout",CheckoutMainRouter)
MainRouter.use("/newsletter",NewsletterMainRouter)
MainRouter.use("/contactus",ContactUsMainRouter)


module.exports = MainRouter 