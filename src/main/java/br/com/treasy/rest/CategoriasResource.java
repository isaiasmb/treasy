package br.com.treasy.rest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.treasy.model.Categoria;
import br.com.treasy.services.CategoriaService;
import br.com.treasy.util.rest.Response;

@Path("/categorias")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
@Consumes(MediaType.APPLICATION_JSON + ";charset=utf-8")
@Component
public class CategoriasResource {

	@Autowired
	private CategoriaService categoriaService;

	@GET
	public List<Categoria> get() {
		return categoriaService.getCategorias();
	}

	@GET
	@Path("{id}")
	public Categoria get(@PathParam("id") long id) {
		Categoria carro = categoriaService.getCategoria(id);
		return carro;
	}

	@GET
	@Path("/nome/{nome}")
	public List<Categoria> getByNome(@PathParam("nome") String nome) {
		return categoriaService.findByNome(nome);
	}

	@POST
	public Response post(Categoria categoria) {
		categoriaService.save(categoria);
		return Response.Ok("Categoria salva com sucesso!");
	}

	@PUT
	public Response put(Categoria categoria) {
		categoriaService.save(categoria);
		return Response.Ok("Categoria alterada com sucesso!");
	}

	@DELETE
	@Path("{id}")
	public Response delete(@PathParam("id") long id) {
		categoriaService.delete(id);
		return Response.Ok("Categoria excluída com sucesso!");
	}

}
