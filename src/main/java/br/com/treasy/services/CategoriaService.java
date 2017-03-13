package br.com.treasy.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import br.com.treasy.dao.CategoriaDao;
import br.com.treasy.model.Categoria;

@Component
public class CategoriaService {

	@Autowired
	private CategoriaDao categoriaDao;

	public List<Categoria> getCategorias() {
		return categoriaDao.getCategorias();
	}

	@Transactional(rollbackFor = Exception.class)
	public boolean save(Categoria categoria) {
		categoriaDao.saveOrUpdate(categoria);
		return true;
	}
	
	@Transactional(rollbackFor = Exception.class)
	public boolean delete(Long id) {
		return categoriaDao.delete(id);
	}

	public Categoria getCategoria(long id) {
		return categoriaDao.getCategoriaById(id);
	}

	public List<Categoria> findByNome(String nome) {
		return categoriaDao.findByNome(nome);
	}

}
