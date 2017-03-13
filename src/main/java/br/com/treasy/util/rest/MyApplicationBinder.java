package br.com.treasy.util.rest;

import org.glassfish.hk2.utilities.binding.AbstractBinder;

import br.com.treasy.services.CategoriaService;

public class MyApplicationBinder extends AbstractBinder {

	@Override
	protected void configure() {
		bind(CategoriaService.class).to(CategoriaService.class);
	}

}
