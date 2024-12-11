var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_proximidade_de_prevencao_tratamento_rg_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "proximidade_de_prevencao_tratamento_rg",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/proximidade_de_prevencao_tratamento_rg_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5866381.814086, -3848786.823440, -5795405.600986, -3733029.626158]
                            })
                        });
var format_web_sig_pep_prepubs_rg_utm_prep_2 = new ol.format.GeoJSON();
var features_web_sig_pep_prepubs_rg_utm_prep_2 = format_web_sig_pep_prepubs_rg_utm_prep_2.readFeatures(json_web_sig_pep_prepubs_rg_utm_prep_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_web_sig_pep_prepubs_rg_utm_prep_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_web_sig_pep_prepubs_rg_utm_prep_2.addFeatures(features_web_sig_pep_prepubs_rg_utm_prep_2);
var lyr_web_sig_pep_prepubs_rg_utm_prep_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_web_sig_pep_prepubs_rg_utm_prep_2, 
                style: style_web_sig_pep_prepubs_rg_utm_prep_2,
                popuplayertitle: "web_sig_pep_prep — ubs_rg_utm_prep",
                interactive: true,
                title: '<img src="styles/legend/web_sig_pep_prepubs_rg_utm_prep_2.png" /> web_sig_pep_prep — ubs_rg_utm_prep'
            });
var format_web_sig_pep_prepubs_rg_utm_pep_3 = new ol.format.GeoJSON();
var features_web_sig_pep_prepubs_rg_utm_pep_3 = format_web_sig_pep_prepubs_rg_utm_pep_3.readFeatures(json_web_sig_pep_prepubs_rg_utm_pep_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_web_sig_pep_prepubs_rg_utm_pep_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_web_sig_pep_prepubs_rg_utm_pep_3.addFeatures(features_web_sig_pep_prepubs_rg_utm_pep_3);
var lyr_web_sig_pep_prepubs_rg_utm_pep_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_web_sig_pep_prepubs_rg_utm_pep_3, 
                style: style_web_sig_pep_prepubs_rg_utm_pep_3,
                popuplayertitle: "web_sig_pep_prep — ubs_rg_utm_pep",
                interactive: true,
                title: '<img src="styles/legend/web_sig_pep_prepubs_rg_utm_pep_3.png" /> web_sig_pep_prep — ubs_rg_utm_pep'
            });
var format_ubs_rg_UTM_4 = new ol.format.GeoJSON();
var features_ubs_rg_UTM_4 = format_ubs_rg_UTM_4.readFeatures(json_ubs_rg_UTM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ubs_rg_UTM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ubs_rg_UTM_4.addFeatures(features_ubs_rg_UTM_4);
var lyr_ubs_rg_UTM_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ubs_rg_UTM_4, 
                style: style_ubs_rg_UTM_4,
                popuplayertitle: "ubs_rg_UTM",
                interactive: true,
                title: '<img src="styles/legend/ubs_rg_UTM_4.png" /> ubs_rg_UTM'
            });
var format_localidades_rg_5 = new ol.format.GeoJSON();
var features_localidades_rg_5 = format_localidades_rg_5.readFeatures(json_localidades_rg_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_localidades_rg_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_localidades_rg_5.addFeatures(features_localidades_rg_5);
var lyr_localidades_rg_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_localidades_rg_5, 
                style: style_localidades_rg_5,
                popuplayertitle: "localidades_rg",
                interactive: true,
                title: '<img src="styles/legend/localidades_rg_5.png" /> localidades_rg'
            });
var format_rodovias_rg_6 = new ol.format.GeoJSON();
var features_rodovias_rg_6 = format_rodovias_rg_6.readFeatures(json_rodovias_rg_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rodovias_rg_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rodovias_rg_6.addFeatures(features_rodovias_rg_6);
var lyr_rodovias_rg_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rodovias_rg_6, 
                style: style_rodovias_rg_6,
                popuplayertitle: "rodovias_rg",
                interactive: true,
                title: '<img src="styles/legend/rodovias_rg_6.png" /> rodovias_rg'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_proximidade_de_prevencao_tratamento_rg_1.setVisible(true);lyr_web_sig_pep_prepubs_rg_utm_prep_2.setVisible(true);lyr_web_sig_pep_prepubs_rg_utm_pep_3.setVisible(true);lyr_ubs_rg_UTM_4.setVisible(true);lyr_localidades_rg_5.setVisible(true);lyr_rodovias_rg_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_proximidade_de_prevencao_tratamento_rg_1,lyr_web_sig_pep_prepubs_rg_utm_prep_2,lyr_web_sig_pep_prepubs_rg_utm_pep_3,lyr_ubs_rg_UTM_4,lyr_localidades_rg_5,lyr_rodovias_rg_6];
lyr_web_sig_pep_prepubs_rg_utm_prep_2.set('fieldAliases', {'fid': 'fid', 'vlr_latitude': 'vlr_latitude', 'vlr_longitude': 'vlr_longitude', 'cod_munic': 'cod_munic', 'cod_cnes': 'cod_cnes', 'nom_estab': 'nom_estab', 'dsc_endereco': 'dsc_endereco', 'dsc_bairro': 'dsc_bairro', 'dsc_cidade': 'dsc_cidade', 'dsc_telefone': 'dsc_telefone', 'dsc_estrut_fisic_ambiencia': 'dsc_estrut_fisic_ambiencia', 'dsc_adap_defic_fisic_idosos': 'dsc_adap_defic_fisic_idosos', 'dsc_equipamentos': 'dsc_equipamentos', 'dsc_medicamentos': 'dsc_medicamentos', 'possui_pep': 'possui_pep', 'possui_prep': 'possui_prep', });
lyr_web_sig_pep_prepubs_rg_utm_pep_3.set('fieldAliases', {'fid': 'fid', 'vlr_latitude': 'vlr_latitude', 'vlr_longitude': 'vlr_longitude', 'cod_munic': 'cod_munic', 'cod_cnes': 'cod_cnes', 'nom_estab': 'nom_estab', 'dsc_endereco': 'dsc_endereco', 'dsc_bairro': 'dsc_bairro', 'dsc_cidade': 'dsc_cidade', 'dsc_telefone': 'dsc_telefone', 'dsc_estrut_fisic_ambiencia': 'dsc_estrut_fisic_ambiencia', 'dsc_adap_defic_fisic_idosos': 'dsc_adap_defic_fisic_idosos', 'dsc_equipamentos': 'dsc_equipamentos', 'dsc_medicamentos': 'dsc_medicamentos', 'possui_pep': 'possui_pep', 'possui_prep': 'possui_prep', });
lyr_ubs_rg_UTM_4.set('fieldAliases', {'fid': 'fid', 'vlr_latitude': 'vlr_latitude', 'vlr_longitude': 'vlr_longitude', 'cod_munic': 'cod_munic', 'cod_cnes': 'cod_cnes', 'nom_estab': 'nom_estab', 'dsc_endereco': 'dsc_endereco', 'dsc_bairro': 'dsc_bairro', 'dsc_cidade': 'dsc_cidade', 'dsc_telefone': 'dsc_telefone', 'dsc_estrut_fisic_ambiencia': 'dsc_estrut_fisic_ambiencia', 'dsc_adap_defic_fisic_idosos': 'dsc_adap_defic_fisic_idosos', 'dsc_equipamentos': 'dsc_equipamentos', 'dsc_medicamentos': 'dsc_medicamentos', 'possui_pep': 'possui_pep', 'possui_prep': 'possui_prep', });
lyr_localidades_rg_5.set('fieldAliases', {'id': 'id', 'objectid': 'objectid', 'tipo': 'tipo', 'nome_zona': 'nome_zona', 'zona': 'zona', 'localidade': 'localidade', 'incidencia': 'incidencia', 'cura': 'cura', 'abandono': 'abandono', 'obito_tb': 'obito_tb', 'p_cura': 'p_cura', 'p_abandono': 'p_abandono', 'p_obito': 'p_obito', 'area_km': 'area_km', 'alagamento': 'alagamento', });
lyr_rodovias_rg_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'id_objeto': 'id_objeto', 'codtrechorodov': 'codtrechorodov', 'tipotrechorod': 'tipotrechorod', 'jurisdicao': 'jurisdicao', 'administracao': 'administracao', 'concessionaria': 'concessionaria', 'revestimento': 'revestimento', 'operacional': 'operacional', 'situacaofisica': 'situacaofisica', 'nrpistas': 'nrpistas', 'nrfaixas': 'nrfaixas', 'trafego': 'trafego', 'capaccarga': 'capaccarga', 'id_produtor': 'id_produtor', 'id_elementoprodutor': 'id_elementoprodutor', 'geometriaaproximada': 'geometriaaproximada', 'canteirodivisorio': 'canteirodivisorio', });
lyr_web_sig_pep_prepubs_rg_utm_prep_2.set('fieldImages', {'fid': '', 'vlr_latitude': '', 'vlr_longitude': '', 'cod_munic': '', 'cod_cnes': '', 'nom_estab': '', 'dsc_endereco': '', 'dsc_bairro': '', 'dsc_cidade': '', 'dsc_telefone': '', 'dsc_estrut_fisic_ambiencia': '', 'dsc_adap_defic_fisic_idosos': '', 'dsc_equipamentos': '', 'dsc_medicamentos': '', 'possui_pep': '', 'possui_prep': '', });
lyr_web_sig_pep_prepubs_rg_utm_pep_3.set('fieldImages', {'fid': '', 'vlr_latitude': '', 'vlr_longitude': '', 'cod_munic': '', 'cod_cnes': '', 'nom_estab': '', 'dsc_endereco': '', 'dsc_bairro': '', 'dsc_cidade': '', 'dsc_telefone': '', 'dsc_estrut_fisic_ambiencia': '', 'dsc_adap_defic_fisic_idosos': '', 'dsc_equipamentos': '', 'dsc_medicamentos': '', 'possui_pep': '', 'possui_prep': '', });
lyr_ubs_rg_UTM_4.set('fieldImages', {'fid': 'TextEdit', 'vlr_latitude': 'TextEdit', 'vlr_longitude': 'TextEdit', 'cod_munic': 'Range', 'cod_cnes': 'Range', 'nom_estab': 'TextEdit', 'dsc_endereco': 'TextEdit', 'dsc_bairro': 'TextEdit', 'dsc_cidade': 'TextEdit', 'dsc_telefone': 'TextEdit', 'dsc_estrut_fisic_ambiencia': 'TextEdit', 'dsc_adap_defic_fisic_idosos': 'TextEdit', 'dsc_equipamentos': 'TextEdit', 'dsc_medicamentos': 'TextEdit', 'possui_pep': 'CheckBox', 'possui_prep': 'CheckBox', });
lyr_localidades_rg_5.set('fieldImages', {'id': 'TextEdit', 'objectid': 'TextEdit', 'tipo': 'TextEdit', 'nome_zona': 'TextEdit', 'zona': 'TextEdit', 'localidade': 'TextEdit', 'incidencia': 'Range', 'cura': 'Range', 'abandono': 'Range', 'obito_tb': 'Range', 'p_cura': 'TextEdit', 'p_abandono': 'TextEdit', 'p_obito': 'TextEdit', 'area_km': 'TextEdit', 'alagamento': 'CheckBox', });
lyr_rodovias_rg_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'id_objeto': 'TextEdit', 'codtrechorodov': 'TextEdit', 'tipotrechorod': 'TextEdit', 'jurisdicao': 'TextEdit', 'administracao': 'TextEdit', 'concessionaria': 'TextEdit', 'revestimento': 'TextEdit', 'operacional': 'TextEdit', 'situacaofisica': 'TextEdit', 'nrpistas': 'Range', 'nrfaixas': 'Range', 'trafego': 'TextEdit', 'capaccarga': 'TextEdit', 'id_produtor': 'Range', 'id_elementoprodutor': 'Range', 'geometriaaproximada': 'TextEdit', 'canteirodivisorio': 'TextEdit', });
lyr_web_sig_pep_prepubs_rg_utm_prep_2.set('fieldLabels', {'fid': 'hidden field', 'vlr_latitude': 'hidden field', 'vlr_longitude': 'hidden field', 'cod_munic': 'hidden field', 'cod_cnes': 'hidden field', 'nom_estab': 'header label - visible with data', 'dsc_endereco': 'hidden field', 'dsc_bairro': 'hidden field', 'dsc_cidade': 'hidden field', 'dsc_telefone': 'hidden field', 'dsc_estrut_fisic_ambiencia': 'hidden field', 'dsc_adap_defic_fisic_idosos': 'hidden field', 'dsc_equipamentos': 'hidden field', 'dsc_medicamentos': 'hidden field', 'possui_pep': 'inline label - always visible', 'possui_prep': 'inline label - always visible', });
lyr_web_sig_pep_prepubs_rg_utm_pep_3.set('fieldLabels', {'fid': 'hidden field', 'vlr_latitude': 'hidden field', 'vlr_longitude': 'hidden field', 'cod_munic': 'hidden field', 'cod_cnes': 'hidden field', 'nom_estab': 'header label - visible with data', 'dsc_endereco': 'hidden field', 'dsc_bairro': 'hidden field', 'dsc_cidade': 'hidden field', 'dsc_telefone': 'hidden field', 'dsc_estrut_fisic_ambiencia': 'hidden field', 'dsc_adap_defic_fisic_idosos': 'hidden field', 'dsc_equipamentos': 'hidden field', 'dsc_medicamentos': 'hidden field', 'possui_pep': 'inline label - always visible', 'possui_prep': 'inline label - always visible', });
lyr_ubs_rg_UTM_4.set('fieldLabels', {'fid': 'hidden field', 'vlr_latitude': 'hidden field', 'vlr_longitude': 'hidden field', 'cod_munic': 'hidden field', 'cod_cnes': 'hidden field', 'nom_estab': 'header label - visible with data', 'dsc_endereco': 'hidden field', 'dsc_bairro': 'hidden field', 'dsc_cidade': 'hidden field', 'dsc_telefone': 'hidden field', 'dsc_estrut_fisic_ambiencia': 'hidden field', 'dsc_adap_defic_fisic_idosos': 'hidden field', 'dsc_equipamentos': 'hidden field', 'dsc_medicamentos': 'hidden field', 'possui_pep': 'inline label - always visible', 'possui_prep': 'inline label - always visible', });
lyr_localidades_rg_5.set('fieldLabels', {'id': 'hidden field', 'objectid': 'hidden field', 'tipo': 'hidden field', 'nome_zona': 'hidden field', 'zona': 'hidden field', 'localidade': 'header label - visible with data', 'incidencia': 'hidden field', 'cura': 'hidden field', 'abandono': 'hidden field', 'obito_tb': 'hidden field', 'p_cura': 'hidden field', 'p_abandono': 'hidden field', 'p_obito': 'hidden field', 'area_km': 'hidden field', 'alagamento': 'hidden field', });
lyr_rodovias_rg_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'id_objeto': 'no label', 'codtrechorodov': 'no label', 'tipotrechorod': 'no label', 'jurisdicao': 'no label', 'administracao': 'no label', 'concessionaria': 'no label', 'revestimento': 'no label', 'operacional': 'no label', 'situacaofisica': 'no label', 'nrpistas': 'no label', 'nrfaixas': 'no label', 'trafego': 'no label', 'capaccarga': 'no label', 'id_produtor': 'no label', 'id_elementoprodutor': 'no label', 'geometriaaproximada': 'no label', 'canteirodivisorio': 'no label', });
lyr_rodovias_rg_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});