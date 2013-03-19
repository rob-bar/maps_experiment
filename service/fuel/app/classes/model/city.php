<?php

class Model_City extends \Orm\Model
{
	protected static $_properties = array(
		'id',
		'name'=> array(
			'data_type' => 'varchar',
		),
		'lat'=> array(
			'data_type' => 'float',
		),
		'lng'=> array(
			'data_type' => 'float',
		),
	);
}
