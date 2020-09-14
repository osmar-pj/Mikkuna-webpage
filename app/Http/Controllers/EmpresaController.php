<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Inventario;

class EmpresaController extends Controller
{
    public function getEmpresas() {
        $empresas = User::where('active', '1')->where('mode', 'empresa')->inRandomOrder()->get();
        return response()->json([
            'empresas' => $empresas
        ]);
    }

    public function getEmpresa($empresa) {
        $lista = User::where('empresa', $empresa)->with('inventario')->first();
        return response()->json([
            'empresa' => $lista
        ]);
    }

    public function getItem($id) {
        $item = Inventario::where('id', $id)->with('empresa')->first();
        return response()->json([
            'item' => $item
        ]);
    }

    public function getServicio(Request $request, $servicio) {
        $servicios = User::where('servicios', $servicio)->inRandomOrder()->get();
        return response()->json([
            'empresa' => $servicios
        ]);
    }

    public function getCategorias(Request $request, $categoria) {
        $lista = User::where('servicio', $categoria)->inRandomOrder()->get();
        $categorias = [
            $categoria => $lista
        ];
        return response()->json([
            'categorias' => $categorias
        ]);
    }

    public function inventarios() {
        $inventarios = Inventario::inRandomOrder()->limit(6)->get();

        return response()->json([
            'inventarios' => $inventarios
        ]);
    }
}
