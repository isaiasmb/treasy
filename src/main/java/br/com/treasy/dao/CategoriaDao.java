package br.com.treasy.dao;

import java.util.List;

import org.hibernate.Query;
import org.springframework.stereotype.Component;

import br.com.treasy.model.Categoria;

@Component
@SuppressWarnings("unchecked")
public class CategoriaDao extends HibernateDAO<Categoria> {

	public CategoriaDao() {
		super(Categoria.class);
	}

	public List<Categoria> getCategorias() {
		Query query = getSession().createQuery("FROM Categoria WHERE categoriaPai IS NULL");
		return query.list();
	}

	public void save(Categoria categoria) {	
		super.save(categoria);
	}

	public Categoria getCategoriaById(long id) {
		return super.get(id);
	}

	public List<Categoria> findByNome(String nome) {
		Query query = getSession().createQuery("FROM Categoria WHERE LOWER(nome) LIKE LOWER(?)");
		query.setString(0, "%" + nome + "%");
		return query.list();
	}
	
	public boolean delete(Long id) {
		Categoria categoria = get(id);
		delete(categoria);
		return true;
	}

}
