var wms_layers = [];


        var lyr_GOOGLESATELLITE_0 = new ol.layer.Tile({
            'title': 'GOOGLE SATELLITE',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GOOGLETERRAINHYBRID_1 = new ol.layer.Tile({
            'title': 'GOOGLE TERRAIN HYBRID',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_SigefBrasil_TO_2 = new ol.format.GeoJSON();
var features_SigefBrasil_TO_2 = format_SigefBrasil_TO_2.readFeatures(json_SigefBrasil_TO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SigefBrasil_TO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SigefBrasil_TO_2.addFeatures(features_SigefBrasil_TO_2);
var lyr_SigefBrasil_TO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SigefBrasil_TO_2, 
                style: style_SigefBrasil_TO_2,
                popuplayertitle: "Sigef Brasil_TO",
                interactive: true,
                    title: '<img src="styles/legend/SigefBrasil_TO_2.png" /> Sigef Brasil_TO'
                });
var format_ImvelcertificadoSNCIBrasil_TO_3 = new ol.format.GeoJSON();
var features_ImvelcertificadoSNCIBrasil_TO_3 = format_ImvelcertificadoSNCIBrasil_TO_3.readFeatures(json_ImvelcertificadoSNCIBrasil_TO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImvelcertificadoSNCIBrasil_TO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImvelcertificadoSNCIBrasil_TO_3.addFeatures(features_ImvelcertificadoSNCIBrasil_TO_3);
var lyr_ImvelcertificadoSNCIBrasil_TO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImvelcertificadoSNCIBrasil_TO_3, 
                style: style_ImvelcertificadoSNCIBrasil_TO_3,
                popuplayertitle: "Imóvel certificado SNCI Brasil_TO",
                interactive: true,
                    title: '<img src="styles/legend/ImvelcertificadoSNCIBrasil_TO_3.png" /> Imóvel certificado SNCI Brasil_TO'
                });
var format_Santa_Elisa_4 = new ol.format.GeoJSON();
var features_Santa_Elisa_4 = format_Santa_Elisa_4.readFeatures(json_Santa_Elisa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Santa_Elisa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Santa_Elisa_4.addFeatures(features_Santa_Elisa_4);
var lyr_Santa_Elisa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Santa_Elisa_4, 
                style: style_Santa_Elisa_4,
                popuplayertitle: "Santa_Elisa",
                interactive: true,
                    title: '<img src="styles/legend/Santa_Elisa_4.png" /> Santa_Elisa'
                });
var group_Vetores = new ol.layer.Group({
                                layers: [lyr_SigefBrasil_TO_2,lyr_ImvelcertificadoSNCIBrasil_TO_3,lyr_Santa_Elisa_4,],
                                fold: "open",
                                title: "Vetores"});
var group_CNFP = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "CNFP"});
var group_MapBiomas = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "MapBiomas"});
var group_Raster = new ol.layer.Group({
                                layers: [lyr_GOOGLESATELLITE_0,lyr_GOOGLETERRAINHYBRID_1,],
                                fold: "open",
                                title: "Raster"});

lyr_GOOGLESATELLITE_0.setVisible(true);lyr_GOOGLETERRAINHYBRID_1.setVisible(true);lyr_SigefBrasil_TO_2.setVisible(true);lyr_ImvelcertificadoSNCIBrasil_TO_3.setVisible(true);lyr_Santa_Elisa_4.setVisible(true);
var layersList = [group_Raster,group_Vetores];
lyr_SigefBrasil_TO_2.set('fieldAliases', {'parcela_co': 'parcela_co', 'rt': 'rt', 'art': 'art', 'situacao_i': 'situacao_i', 'codigo_imo': 'codigo_imo', 'data_submi': 'data_submi', 'data_aprov': 'data_aprov', 'status': 'status', 'nome_area': 'nome_area', 'registro_m': 'registro_m', 'registro_d': 'registro_d', 'municipio_': 'municipio_', 'uf_id': 'uf_id', });
lyr_ImvelcertificadoSNCIBrasil_TO_3.set('fieldAliases', {'num_proces': 'num_proces', 'sr': 'sr', 'num_certif': 'num_certif', 'data_certi': 'data_certi', 'qtd_area_p': 'qtd_area_p', 'cod_profis': 'cod_profis', 'cod_imovel': 'cod_imovel', 'nome_imove': 'nome_imove', 'uf_municip': 'uf_municip', });
lyr_Santa_Elisa_4.set('fieldAliases', {'fid': 'fid', 'num_proces': 'num_proces', 'sr': 'sr', 'num_certif': 'num_certif', 'data_certi': 'data_certi', 'qtd_area_p': 'qtd_area_p', 'cod_profis': 'cod_profis', 'cod_imovel': 'cod_imovel', 'nome_imove': 'nome_imove', 'uf_municip': 'uf_municip', });
lyr_SigefBrasil_TO_2.set('fieldImages', {'parcela_co': 'TextEdit', 'rt': 'TextEdit', 'art': 'TextEdit', 'situacao_i': 'TextEdit', 'codigo_imo': 'TextEdit', 'data_submi': 'DateTime', 'data_aprov': 'DateTime', 'status': 'TextEdit', 'nome_area': 'TextEdit', 'registro_m': 'TextEdit', 'registro_d': 'DateTime', 'municipio_': 'Range', 'uf_id': 'Range', });
lyr_ImvelcertificadoSNCIBrasil_TO_3.set('fieldImages', {'num_proces': 'TextEdit', 'sr': 'TextEdit', 'num_certif': 'TextEdit', 'data_certi': 'DateTime', 'qtd_area_p': 'TextEdit', 'cod_profis': 'TextEdit', 'cod_imovel': 'TextEdit', 'nome_imove': 'TextEdit', 'uf_municip': 'TextEdit', });
lyr_Santa_Elisa_4.set('fieldImages', {'fid': 'TextEdit', 'num_proces': 'TextEdit', 'sr': 'TextEdit', 'num_certif': 'TextEdit', 'data_certi': 'DateTime', 'qtd_area_p': 'TextEdit', 'cod_profis': 'TextEdit', 'cod_imovel': 'TextEdit', 'nome_imove': 'TextEdit', 'uf_municip': 'TextEdit', });
lyr_SigefBrasil_TO_2.set('fieldLabels', {'parcela_co': 'no label', 'rt': 'no label', 'art': 'no label', 'situacao_i': 'no label', 'codigo_imo': 'no label', 'data_submi': 'no label', 'data_aprov': 'no label', 'status': 'no label', 'nome_area': 'no label', 'registro_m': 'no label', 'registro_d': 'no label', 'municipio_': 'no label', 'uf_id': 'no label', });
lyr_ImvelcertificadoSNCIBrasil_TO_3.set('fieldLabels', {'num_proces': 'inline label - always visible', 'sr': 'inline label - always visible', 'num_certif': 'inline label - always visible', 'data_certi': 'inline label - always visible', 'qtd_area_p': 'inline label - always visible', 'cod_profis': 'inline label - always visible', 'cod_imovel': 'inline label - always visible', 'nome_imove': 'inline label - always visible', 'uf_municip': 'inline label - always visible', });
lyr_Santa_Elisa_4.set('fieldLabels', {'fid': 'no label', 'num_proces': 'no label', 'sr': 'no label', 'num_certif': 'no label', 'data_certi': 'no label', 'qtd_area_p': 'no label', 'cod_profis': 'no label', 'cod_imovel': 'no label', 'nome_imove': 'no label', 'uf_municip': 'no label', });
lyr_Santa_Elisa_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});