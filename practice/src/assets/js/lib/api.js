//系统配置
export const getGlobalInfo = '/api/system/getGlobalInfo'
//微信配置
export const getWXJSApiTicket = '/api/user/WXJSApiTicket'

//订单相关api地址 begin
export const getOrderList = '/api/order/getOrderList'
export const getOrderDetail = '/api/order/getOrderDetail'
export const deleteOrder = '/api/order/deleteOrder'
export const cancelOrder = '/api/order/cancelOrder'
export const copyOrder = '/api/order/copyOrder'
export const updateOrderAddress = '/api/order/updateOrderAddress'
export const confirmTakeDelivery = '/api/order/confirmTakeDelivery'
export const submitOrder = '/api/order/submitOrder'
//订单相关api地址 end

//购物车相关
export const getCartProductList = '/api/cart/getCartList'
export const updateCart = '/api/cart/updateCart'
export const deleteCartItem = '/api/cart/deleteCartItem'
export const addCart = '/api/cart/addCartByMulProperty'
export const clearCart = '/api/cart/clearCart'
export const submitOrderBefore = '/api/order/getSubmitOrderInfo'

//消息
export const getOrderMessageList = '/api/message/getOrderMessageList'
export const getNoticeList = '/api/message/getNoticeList'
export const readSingleMessage = '/api/message/readSingleMessage'
export const getNoticeDetail = '/api/message/getNoticeDetail'
export const batchDeleteMessage = '/api/message/batchDeleteMessage'
export const batchReadSingleMessage = '/api/message/batchReadSingleMessage'
export const getNoReadMessageCount = '/api/message/getNoReadMessageCount'
export const getPromotionList = '/api/message/getPromotionList'

//login
export const login = '/api/user/login'
export const loginbywx = '/api/user/loginwx'

//mine
export const getaccountdata = '/api/personalcenter/getUserInfo'
export const editaccountdata = '/api/personalcenter/modifyUserInfo'
export const editaccountPwd = '/api/personalcenter/modifyPassword'
export const getboughtproduct = '/api/product/getBoughtProduct'
export const getbrowsinghistory = '/api/personalcenter/getBrowsingRecord'
export const getcollectionlist = '/api/product/getCollectProduct'
export const cancelcollection = '/api/product/cancelFavorite'
export const clearcollection = '/api/product/clearFavorite'
export const clearbrowsinghistory = '/api/personalcenter/clearBrowsingRecord'
export const getaboutusinfo = '/api/system/getGlobalInfo'
export const unbindingWX = '/api/user/unbindingWX'
export const bindingWX = '/api/user/bindingWX'

//address相关api地址  begin
export const getDefaultAddress = '/api/personalcenter/getDefaultAddress'
export const getAddressList = "/api/personalcenter/getAddressList"
export const setDefaultAddress = "/api/personalcenter/setDefaultAddress"
export const deleteAddress = "/api/personalcenter/deleteAddress"
export const modifyAddress = "/api/personalcenter/modifyAddress"
export const addAddress = "/api/personalcenter/addAddress"
export const getAddressDetail = "/api/personalcenter/getAddressDetail"
//address相关api地址  end


//资金账户有关
export const getPayRecordList = '/api/personalcenter/getPayRecordList'
export const getPayDetail = '/api/personalcenter/getPayDetail'
export const getAccountBalance = '/api/personalcenter/getAccountBalance'
export const getAdvanceAccountRecordList = '/api/personalcenter/getAdvanceAccountRecordList'
export const getAdvanceAccountDetail = '/api/personalcenter/getAdvanceAccountDetail'
export const getOrderPayRecord = '/api/personalcenter/getOrderPayRecord'

//退货相关
export const getReturnedList = '/api/returned/getReturnedList'
export const getReturnedDetail = '/api/returned/getReturnedDetail'
export const getProductByOrder = '/api/returned/getProductByOrder'
export const getBoughtProductByReturned = '/api/returned/getBoughtProductByReturned'
export const submitreturn = '/api/returned/submitReturnedBill'

//product
export const bannerNotice = "/api/product/getBannerNotice" //首页banner和公告
export const productlist = "/api/product/getProductList" //商品列表接口
export const productdetail = "/api/product/getProductDetail" //商品详情接口
export const relevanceproduct = "/api/product/getRelevanceProduct" //关联商品接口
export const favorite = "/api/product/addFavorite" //收藏商品接口
export const cancelfavorite = "/api/product/cancelFavorite" //取消收藏接口
export const firstLevelClass = "/api/product/getFirstLevelClass" //获取商品分类一级
export const otherLevelClass = "/api/product/getOtherLevelClass" //获取商品分类二三级
export const brandList = "/api/product/getBrandList" //获取商品筛选条件
export const addBrowsingRecord = "/api/personalcenter/addBrowsingRecord" //加入浏览记录

//支付pay
export const wxunifiedorder = "/api/pay/wxUnifiedOrder" //微信统一下单
export const aliUnifiedOrder = "/api/pay/aliUnifiedOrder" //支付宝统一下单
export const getDefaultDataByPay = '/api/pay/getDefaultDataByPay' //支付前获取初始数据
export const payByBalance = '/api/pay/payByBalance' //余额支付接口
export const payByBank = '/api/pay/payByBank' //订单-银行转账
export const getAccountList = '/api/pay/getAccountList' //获取收款账户列表
export const paystatusquery = '/api/pay/paystatusquery' //订单/充值支付状态查询
