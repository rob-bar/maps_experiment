<?php
class Controller_Base extends Controller_Rest {
  public function before() {
    parent::before();
    $this->set_lang($this->param('lang'));
  }

  protected function set_lang($param_lang) {
    if(!$param_lang) {
      return;
    }
    Session::set('language', $param_lang);
    Config::set('language', Session::get('language'));
  }

  public function action_index() {
    $cities = DB::select()->from('cities')->execute()->as_array();
    return $this->response($cities);
  }
}