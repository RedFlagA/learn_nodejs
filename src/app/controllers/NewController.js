export default class NewsControllers{
  // [GET] / news
  index(req, res){
    res.render('news')
  }
  // [GET] / news/:slug
  showDetail(req, res){
    res.send('detail')
  }
}
